export const name="crowdsource";
export const id="dl_bbd2c17e4bf89a9e308c";
export const url=new URL("../icons/crowdsource.svg?v=658d2687c2653587d701a53eac4498b495426bda815334a2628169bb4b7ba250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
