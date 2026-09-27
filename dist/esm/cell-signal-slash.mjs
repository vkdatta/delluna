export const name="cell-signal-slash";
export const id="dl_1f4e027a95d94f6781dc";
export const url=new URL("../icons/cell-signal-slash.svg?v=a4a2a3aef711304ce0754b7861794bc5017742c65e6dcb29c497876fd12622f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
