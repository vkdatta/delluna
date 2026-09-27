export const name="spotify-logo-thin";
export const id="dl_4218d50e34da9db2bdfa";
export const url=new URL("../icons/spotify-logo-thin.svg?v=fb59629cc8413aa3caaa541b614befe4a33eac1c159ea59a35ab6d525fe6693c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
