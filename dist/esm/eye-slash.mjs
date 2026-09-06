export const name="eye-slash";
export const id="dl_1e40fa0e6eb3458ca58f";
export const url=new URL("../icons/eye-slash.svg?v=070b0296a7df89ebf4cec12436e323b5531d458aa9aed3608924085889e1fd17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
