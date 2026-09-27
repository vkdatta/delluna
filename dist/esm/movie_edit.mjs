export const name="movie_edit";
export const id="dl_3883f9db4b67dd4c536f";
export const url=new URL("../icons/movie_edit.svg?v=375de5e8a02358831a9369c422e00944f5798301a80f96747ea0f65348e1a698",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
