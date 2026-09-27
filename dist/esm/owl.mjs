export const name="owl";
export const id="dl_04708c92d795d260527f";
export const url=new URL("../icons/owl.svg?v=b4a839ab6719e64642d24c2e5d892d491238fade33dc94420f1ef9756a582025",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
