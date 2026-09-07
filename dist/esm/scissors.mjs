export const name="scissors";
export const id="dl_27f27bc626fd45f5bf78";
export const url=new URL("../icons/S/scissors.svg?v=54180ec6ac157bafe78c40b16a0a03b588886e1e86497241c97ba9f4aacdeab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
