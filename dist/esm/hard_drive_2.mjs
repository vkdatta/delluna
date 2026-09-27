export const name="hard_drive_2";
export const id="dl_649e6fc5efe842331b20";
export const url=new URL("../icons/hard_drive_2.svg?v=4db4cfd08be8f2fcdf363ee089ba0948371f242d06b9522a3b0374569bf33b3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
