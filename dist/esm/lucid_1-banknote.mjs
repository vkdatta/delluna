export const name="lucid_1-banknote";
export const id="dl_fa9d47e8210f48cb9ec4";
export const url=new URL("../icons/lucid_1-banknote.svg?v=bc9c1758590df5fa8c8ac816e7e9474d2ec0cf0c486a72ec0e255f0a8493b316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
