export const name="zodiac-libra";
export const id="dl_b489d84af8aa4304aa95";
export const url=new URL("../icons/zodiac-libra.svg?v=ea45392059168495647ba21c8a27d3f8b917fd0ab103d4bbf807b083538072b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
