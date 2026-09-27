export const name="lucid_1-brick-wall";
export const id="dl_e740df8cfe7841e7ae46";
export const url=new URL("../icons/lucid_1-brick-wall.svg?v=46d424ae205fe8fa3fa67760022acf8c56cc4e6b2c42895f1199a18d8e3040b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
