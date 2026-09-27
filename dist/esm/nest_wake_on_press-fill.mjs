export const name="nest_wake_on_press-fill";
export const id="dl_56d4dfcc64ff3d3c0305";
export const url=new URL("../icons/nest_wake_on_press-fill.svg?v=4c6aaf769d22472cc79d78f87b5c48d634dc5cbe856a014a51f8e94f70534075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
