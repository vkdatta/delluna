export const name="gear-fine";
export const id="dl_83adccf2e93546b4a63d";
export const url=new URL("../icons/gear-fine.svg?v=6a63a66151d553710bf280ed6bdc34a0533b9c353a4690b37ebd6c6ce2868793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
