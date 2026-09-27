export const name="follow_the_signs-fill";
export const id="dl_ec9e6c5ebf8c310dcbf0";
export const url=new URL("../icons/follow_the_signs-fill.svg?v=d6fef8f151cbb27cc2a324c7ca8b0263498609decfc510f74d223ac8df7fbff3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
