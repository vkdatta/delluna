export const name="deskphone";
export const id="dl_466c37c10969f1f81e25";
export const url=new URL("../icons/deskphone.svg?v=22aa8892f8fdcd89af2eb6c90ff70b231ce679b07d897ab063f52bc0b54f87ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
