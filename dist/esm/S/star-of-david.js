export const name="star-of-david";
export const id="dl_e9e2041b77640e6a2b72";
export const url=new URL("../../icons/S/star-of-david.svg?v=a53919aaef6e4fde0bb24aeb84222fa2d3f6585f0f328a2d323d5892259e4f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
