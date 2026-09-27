export const name="surround_sound";
export const id="dl_4bbf98ee4161d0f761b8";
export const url=new URL("../icons/surround_sound.svg?v=b1d1f24346e4e3e5d44701609fe753c251c07198fefe76a16987cac81c02cb92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
