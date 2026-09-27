export const name="drive_file_move";
export const id="dl_0c20b5e53ff38952c9f7";
export const url=new URL("../icons/drive_file_move.svg?v=a40fdfb0a339bdc208d2bf5d0dced6055325058ebb92f73dfa80b863aea6bd38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
