export const name="lucid_1-alarm-clock-check";
export const id="dl_c538862e046d4a798091";
export const url=new URL("../icons/lucid_1-alarm-clock-check.svg?v=27e6287279283fc140e7585919208086fad6a906f29f71f96575c7f0c3504d70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
