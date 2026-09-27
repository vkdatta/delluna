export const name="eyeglasses-thin";
export const id="dl_4e790f8a555a45ee8109";
export const url=new URL("../icons/eyeglasses-thin.svg?v=34956721221baf65423a08d320d112ad8279ec5b20008dfa8078dd8afcf1d15d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
