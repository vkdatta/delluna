export const name="webcam-slash";
export const id="dl_a06957cadb4f70c2c88d";
export const url=new URL("../icons/webcam-slash.svg?v=29ce19552540c67287c192345278b1fccbc974445f04207047afde1c017162f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
