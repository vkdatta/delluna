export const name="multicooker";
export const id="dl_6648d7ee16d6f807b330";
export const url=new URL("../icons/multicooker.svg?v=282e9b3dced717ada49edfb159a5edf263815ef3f1de03bbc6f5572cb58d68e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
