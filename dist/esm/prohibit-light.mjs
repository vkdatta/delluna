export const name="prohibit-light";
export const id="dl_62c08d5dcead4e58a465";
export const url=new URL("../icons/prohibit-light.svg?v=9fd52ae9ff6013a5e97a4af9efd6123cc96d68386e961374e480fd3c82c16294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
