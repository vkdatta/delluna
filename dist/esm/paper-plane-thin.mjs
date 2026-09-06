export const name="paper-plane-thin";
export const id="dl_b6e85ddd246248bfa70f";
export const url=new URL("../icons/paper-plane-thin.svg?v=01e2d2bfd26ef19e044894ae7ed9170daccd91a5f18702b6ef984559722b1760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
