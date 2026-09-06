export const name="instagram-logo-fill";
export const id="dl_9fde1c10ffa34e9a9550";
export const url=new URL("../icons/instagram-logo-fill.svg?v=24444c671b0c50580b39138453762225d4d53b7d04c978244b8027a84c719746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
