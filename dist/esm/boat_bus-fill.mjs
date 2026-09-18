export const name="boat_bus-fill";
export const id="dl_cd84b0a2406e44f1b572";
export const url=new URL("../icons/boat_bus-fill.svg?v=5175fa378d77bdd801511e1637759753b6c142463bb53c1fab0915cc0b735da1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
