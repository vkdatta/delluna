export const name="cast_warning";
export const id="dl_56658fa3531b86112e71";
export const url=new URL("../icons/cast_warning.svg?v=7c8f8b6097542eb1cfe0f5206faaa44a08c2d020804ed7ab40033510b4b54dab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
