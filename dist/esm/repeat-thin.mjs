export const name="repeat-thin";
export const id="dl_efbb02f86fdf424f9857";
export const url=new URL("../icons/repeat-thin.svg?v=d99d3be348980a53a9bfcba4caa24e50955ffbe17e73f8180d5ea4e1e3f8e681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
