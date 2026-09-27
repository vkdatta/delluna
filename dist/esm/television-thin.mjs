export const name="television-thin";
export const id="dl_946f496e308419abe724";
export const url=new URL("../icons/television-thin.svg?v=68038c0645930ae00ad05561dfc5c3418dbfea65e6fea03e4e418c39a0f1b13d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
