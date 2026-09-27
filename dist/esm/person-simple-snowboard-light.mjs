export const name="person-simple-snowboard-light";
export const id="dl_167275694684439fb854";
export const url=new URL("../icons/person-simple-snowboard-light.svg?v=9bcf87e00313ffb0bfbf0b99c38378203657aebd4aab6642ce9e11e3887c7a3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
