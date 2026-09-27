export const name="scoreboard";
export const id="dl_86f377855fb7940b94c8";
export const url=new URL("../icons/scoreboard.svg?v=291c08db42714756d3c08025cb3baa4145683f6314bae95e05cdb5d497b46250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
