export const name="attach_file_off";
export const id="dl_8ceea2a8a31abe770b59";
export const url=new URL("../icons/attach_file_off.svg?v=35479321ba924805796776bcc56e301bdd2863021a855d8189a9d453efad574c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
