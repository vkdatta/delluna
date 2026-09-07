export const name="flag-checkered-thin";
export const id="dl_335a89bf8e49402da984";
export const url=new URL("../icons/flag-checkered-thin.svg?v=949ad95cd238f9e83f3b5fd6629e542de5bd10bee78930907fdce14ac8d45956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
