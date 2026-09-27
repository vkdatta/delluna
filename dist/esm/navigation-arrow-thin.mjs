export const name="navigation-arrow-thin";
export const id="dl_01dab6d113d14d999536";
export const url=new URL("../icons/navigation-arrow-thin.svg?v=e3c2bd1b32f44fd2a980d63ecc11ffeac0243f2ccb01dffd37e18bcddf031b9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
