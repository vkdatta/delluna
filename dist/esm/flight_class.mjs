export const name="flight_class";
export const id="dl_4b6c8c0ab1994e0392ea";
export const url=new URL("../icons/flight_class.svg?v=d39e797eeb3a6884bd3d2b767e304503a37fafee810b1e7f447358adbb3a9dfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
