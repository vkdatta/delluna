export const name="theaters-fill";
export const id="dl_98e34fa3bf71b9da0f69";
export const url=new URL("../icons/theaters-fill.svg?v=0999c6188eb0f75c785a18322dfcf02bbd87ccae49014a51b5063da6d253f0de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
