export const name="globe-simple-x-thin";
export const id="dl_0b5b4349be904b9898f3";
export const url=new URL("../icons/globe-simple-x-thin.svg?v=7879732c2b801c9eadb213f5ece9eea1eb736b7f65d87b1ef3ae1ed19992178f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
