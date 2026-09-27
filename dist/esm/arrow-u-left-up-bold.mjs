export const name="arrow-u-left-up-bold";
export const id="dl_8836de9fad924f2bbc69";
export const url=new URL("../icons/arrow-u-left-up-bold.svg?v=19b5fa7c73ee57f83b200ca9413747f86fb1bb4063672c21bdc67f144c8dfa70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
