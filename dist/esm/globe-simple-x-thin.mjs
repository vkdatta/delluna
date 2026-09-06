export const name="globe-simple-x-thin";
export const id="dl_0b5b4349be904b9898f3";
export const url=new URL("../icons/globe-simple-x-thin.svg?v=226a530554a878a576a4b7fbb32bb33510645c4593ebfa2eac72de12d1b5d538",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
