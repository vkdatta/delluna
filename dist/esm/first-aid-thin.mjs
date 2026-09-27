export const name="first-aid-thin";
export const id="dl_cfd12b4967d9416ca904";
export const url=new URL("../icons/first-aid-thin.svg?v=9b4f8ed337fd3b7f8ad778c338b18c056bcce68ac81723913ac094d7252ac8ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
