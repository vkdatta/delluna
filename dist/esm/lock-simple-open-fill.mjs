export const name="lock-simple-open-fill";
export const id="dl_850e4796b5d847c0bc0c";
export const url=new URL("../icons/lock-simple-open-fill.svg?v=fa4603d9987e96952fb892c19a717bfa674af6520f1e469eb6a812411303c60e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
