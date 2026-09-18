export const name="widget_small";
export const id="dl_f8825e0dd7994d53b665";
export const url=new URL("../icons/widget_small.svg?v=503295fae7aa7c4cad180929e933834afcae0ff06a71cdf1b9db7488d24c46c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
