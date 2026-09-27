export const name="vacuum";
export const id="dl_61e4d76c3db6e781c0ff";
export const url=new URL("../icons/vacuum.svg?v=178a7128648421db6b50d7f4a9b06c57a9759dbbb4333c688936932aed6588d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
