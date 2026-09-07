export const name="dice-four-bold";
export const id="dl_699e112982bc407ab0d4";
export const url=new URL("../icons/dice-four-bold.svg?v=aa22862313bf8d081ea580d5aec836a8d98dff96d73f4556aa94089be7ca74e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
