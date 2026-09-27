export const name="tire-light";
export const id="dl_170367b2e7650c9d1e81";
export const url=new URL("../icons/tire-light.svg?v=5577475ff036b556a1ad563fc429bb046bfd83c921a0e2041eb1d667cccf2bf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
