export const name="screencast-thin";
export const id="dl_8a8da09c95555ada47d8";
export const url=new URL("../icons/screencast-thin.svg?v=5c03fe8a2a96d9a859b1eac2630b9af3a4bc1453fd3c1f4790b75670fa4499e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
