export const name="stripe-logo-light";
export const id="dl_ad6bf49b6e4c0313111a";
export const url=new URL("../icons/stripe-logo-light.svg?v=c1e81632817d0cddd92e8cdd0473247c8a2e223a69e2e58ee7472ed69eb5adc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
