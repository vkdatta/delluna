export const name="shuffle-angular-thin";
export const id="dl_22cb1b34e8ad8d52bca5";
export const url=new URL("../icons/shuffle-angular-thin.svg?v=9e4f3569a0766cff314c42237e78b3a0e030333fc18f08aecd65dad7858468de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
