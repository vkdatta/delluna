export const name="seat_vent_left-fill";
export const id="dl_339ffd121a1ea6ba9a8f";
export const url=new URL("../icons/seat_vent_left-fill.svg?v=ee28e012ff2349de00ad371591125392954863abdd059e5a43640be4f441301e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
