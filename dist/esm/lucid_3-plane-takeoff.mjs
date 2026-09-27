export const name="lucid_3-plane-takeoff";
export const id="dl_ed73f1284cf54ba299ff";
export const url=new URL("../icons/lucid_3-plane-takeoff.svg?v=09df189b5a65c8048addfd70e9ba01f8b58355787f919a25629f40aa787086bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
