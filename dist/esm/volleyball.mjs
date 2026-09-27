export const name="volleyball";
export const id="dl_03691b0b81d247fd8b83";
export const url=new URL("../icons/volleyball.svg?v=af33d66a3bfe201bab3c15002ba140b05ef1cf0c110779b2bcac0f22169469e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
