export const name="cell-signal-full";
export const id="dl_979151ad67704910a488";
export const url=new URL("../icons/cell-signal-full.svg?v=4f423d223528e70805c8d6faa3b6aadc68f58dfece546bf44b76205dcb72c799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
