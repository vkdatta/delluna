export const name="calendar-plus-thin";
export const id="dl_c5846d9510da4ecfb3cd";
export const url=new URL("../icons/calendar-plus-thin.svg?v=2e44db6b2c38fb01bbbf4fe5d28ef8ca747f231af47528001fbc96e20feb5c57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
