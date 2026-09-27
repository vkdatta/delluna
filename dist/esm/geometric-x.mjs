export const name="geometric-x";
export const id="dl_81bb1fd88bf27df7e607";
export const url=new URL("../icons/geometric-x.svg?v=506ac5ce862b38e6002d510de6285d4fc32dc00c3837de8a23d0460254f6e422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
