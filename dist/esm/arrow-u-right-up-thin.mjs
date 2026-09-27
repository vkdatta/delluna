export const name="arrow-u-right-up-thin";
export const id="dl_4adc232559854ad79ba5";
export const url=new URL("../icons/arrow-u-right-up-thin.svg?v=3b1d621066382cdd6aec1759009d9052b7f5a36dcda3ae7e52d7069ba310a934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
