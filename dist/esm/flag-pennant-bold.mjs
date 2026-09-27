export const name="flag-pennant-bold";
export const id="dl_dd34f8c7ad3549858156";
export const url=new URL("../icons/flag-pennant-bold.svg?v=ca0d3a3042ec019a8e9d829ba5dc810c027a28e189bdd466aa1fd91525e5058b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
