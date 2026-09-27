export const name="fast-forward-circle";
export const id="dl_9e5faadf48334db1a03b";
export const url=new URL("../icons/fast-forward-circle.svg?v=69fc51ebb676a3b1ea74023bd050725e2661c53d6ad06bd60d25f1f8e780aa27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
