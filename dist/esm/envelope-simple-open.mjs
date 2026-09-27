export const name="envelope-simple-open";
export const id="dl_19efd37cd86642b5b48e";
export const url=new URL("../icons/envelope-simple-open.svg?v=9f7d20070a7cc4df9e8abaa0eeff44970392ddec074ad7ddb11bc115181ae239",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
